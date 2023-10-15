// Import Solana web3.js and connect to the network
const { Connection, Transaction, SystemProgram, PublicKey } = require('@solana/web3.js');

// Replace with your Solana network URL
const connection = new Connection('https://api.devnet.solana.com');

// Define the smart contract address
const SMART_CONTRACT_ADDRESS = '5sKrAv4q4MA7DgDHekr8dhtv7PUxVwHFguD9ziRHWYcE';

// DOM elements
const donationForm = document.querySelector('.donation-form');
const amountInput = document.getElementById('amount');
const donateButton = document.querySelector('.donate-button');

// Event listener for the Donate Now button
donateButton.addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value);
    const donorAddress = new PublicKey('4ETf86tK7b4W72f27kNLJLgRWi9UfJjgH4koHGUXMFtn');

    // Create a transaction to send SOL to the smart contract
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: donorAddress,
            toPubkey: new PublicKey(SMART_CONTRACT_ADDRESS),
            lamports: amount * 1e9, // Convert SOL to lamports
        })
    );

    try {
        // Sign and send the transaction
        const signature = await connection.sendTransaction(transaction);

        // Display a success message or redirect to a thank you page
        alert(`Donation successful! Transaction ID: ${signature}`);

        // You can add further user feedback or redirection logic here.
    } catch (error) {
        console.error('Transaction failed', error);

        // Display an error message or handle the failure gracefully
        alert('Donation failed. Please try again.');
    }
});
