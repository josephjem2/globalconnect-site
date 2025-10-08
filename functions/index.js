const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Remember to set your live Stripe secret key in your Firebase environment configuration
const stripe = require('stripe')('sk_live_REPLACE_WITH_YOUR_SECRET_KEY');

exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
  const { amount, success_url, cancel_url } = data;

  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'You must be logged in to make a donation.');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation to GlobalConnect',
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
    });

    return { id: session.id };
  } catch (error) {
    console.error('Error creating Stripe Checkout session:', error);
    throw new functions.https.HttpsError('internal', 'An error occurred while creating the checkout session.');
  }
});