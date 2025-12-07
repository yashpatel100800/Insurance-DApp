## Github Repo Link:- https://github.com/yashpatel100800/Insurance-DApp.git


# HealthCare Chain - Blockchain Health Insurance Platform

A decentralized health insurance platform built on Ethereum blockchain using Solidity, Next.js, and modern Web3 technologies.

## Features

- **Decentralized Insurance Plans**: Basic, Premium, and Platinum tiers with flexible payment options
- **Smart Contract Automation**: Automated policy management and claim processing
- **Instant Claim Settlement**: Blockchain-powered instant payouts for approved claims
- **IPFS Document Storage**: Secure, decentralized storage for medical documents
- **Admin Dashboard**: Comprehensive management tools for policies, claims, and plans
- **Analytics**: Real-time insights into policies, claims, and revenue
- **Monthly Subscriptions**: Support for both one-time annual and monthly premium payments

## Technology Stack

- **Smart Contracts**: Solidity ^0.8.19
- **Frontend**: Next.js 14, React 18, TailwindCSS
- **Web3 Integration**: ethers.js, wagmi, RainbowKit
- **Blockchain**: Ethereum (Hardhat for local development)
- **Storage**: IPFS via Pinata
- **Charts**: Recharts for analytics visualization
- **Development**: Hardhat, OpenZeppelin

## Prerequisites

- Node.js v20 or higher
- npm v8.19.2 or higher
- MetaMask browser extension
- Git

## Installation

### 1. Clone the repository

\`\`\`bash
git clone <your-repository-url>
cd "Insurance DApp"
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
cd web3
npm install
cd ..
\`\`\`

### 3. Environment Setup

Create \`.env.local\` in the root directory:

\`\`\`env
# Wallet Connect
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id

# Network Configuration
NEXT_PUBLIC_NETWORK=localhost
NEXT_PUBLIC_NETWORK_CHAINID=1337

# Contract Addresses
NEXT_PUBLIC_CONTRACT_ADDRESS_LOCALHOST=<deployed_contract_address>

# RPC URLs
NEXT_PUBLIC_LOCALHOST_RPC=http://127.0.0.1:8545

# Pinata IPFS
NEXT_PUBLIC_PINATA_API_KEY=your_api_key
NEXT_PUBLIC_PINATA_SECRET_KEY=your_secret_key
NEXT_PUBLIC_PINATA_JWT=your_jwt_token

# App Info
NEXT_PUBLIC_APP_NAME=HealthCare Chain
NEXT_PUBLIC_APP_DESCRIPTION=Decentralized Health Insurance Platform
\`\`\`

Create \`.env\` in the \`web3\` directory:

\`\`\`env
PRIVATE_KEY=your_private_key_without_0x_prefix
HOLESKY_RPC_URL=https://rpc.ankr.com/eth_holesky/
REPORT_GAS=true
\`\`\`

### 4. Required Services

#### Pinata (IPFS)
1. Visit https://pinata.cloud/
2. Create an account
3. Generate API keys and JWT token
4. Add to \`.env.local\`

#### Reown (WalletConnect)
1. Visit https://docs.reown.com/cloud/relay
2. Create a project
3. Get your Project ID
4. Add to \`.env.local\`

## Local Development

### 1. Start Hardhat Node

\`\`\`bash
cd web3
npx hardhat node
\`\`\`

This will start a local Ethereum node on \`http://127.0.0.1:8545\`

### 2. Deploy Smart Contract

In a new terminal:

\`\`\`bash
cd web3
npx hardhat run scripts/deploy.js --network localhost
\`\`\`

Copy the deployed contract address and update it in \`.env.local\`

### 3. Import Test Accounts to MetaMask

Import Account #0 (Owner/Admin):
- Private Key: \`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80\`
- Address: \`0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\`

See \`web3/hardhat-accounts.txt\` for more test accounts.

### 4. Configure MetaMask Network

Add Localhost network to MetaMask:
- Network Name: Localhost 8545
- RPC URL: http://127.0.0.1:8545
- Chain ID: 31337
- Currency Symbol: ETH

### 5. Start Frontend

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\`

## Project Structure

\`\`\`
Insurance DApp/
├── components/          # React components
│   ├── Admin/          # Admin dashboard components
│   ├── Analytics/      # Analytics and charts
│   ├── Claims/         # Claim management
│   ├── Dashboard/      # User dashboard
│   ├── Layout/         # Layout components
│   ├── Plans/          # Insurance plans
│   └── Policies/       # Policy management
├── pages/              # Next.js pages
├── services/           # Services (contract, IPFS)
├── web3/               # Smart contracts
│   ├── contracts/      # Solidity contracts
│   ├── scripts/        # Deployment scripts
│   └── deployments/    # Deployment info
├── public/             # Static assets
└── styles/             # CSS styles
\`\`\`

## Smart Contract

The main contract is \`HealthInsuranceDApp.sol\` which includes:
- Policy purchase and management
- Monthly premium payments
- Claim submission and processing
- Insurance plan management
- Access control (Owner, Authorized Doctors)
- Emergency pause functionality

## Usage

### For Users
1. Browse insurance plans
2. Purchase a policy (annual or monthly)
3. Submit claims with medical documents
4. Track claim status
5. Pay monthly premiums

### For Admins
1. Manage insurance plans
2. Process claims
3. Authorize doctors
4. Fund contract for payouts
5. View analytics and statistics

## Testing

\`\`\`bash
cd web3
npx hardhat test
\`\`\`

## Deployment to Testnet

### Holesky Testnet

1. Get test ETH from faucet
2. Update \`web3/.env\` with your private key
3. Deploy:

\`\`\`bash
cd web3
npx hardhat run scripts/deploy.js --network holesky
\`\`\`


## Support

For issues and questions, please open an issue on GitHub.
