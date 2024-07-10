# supplychainbrutus.com
SupplyChainBrutus.com is a web-based platform developed for a research study that employs a Large Language Model (LLM) to answer user queries about supply chain management. The project seeks to collect and analyze user questions, evaluate effectiveness of AI responses, and identify knowledge gaps in the field.

# SupplyChainBrutus

## Project Overview

SupplyChainBrutus.com is an web-based platform designed to bridge the gap between artificial intelligence and supply chain management knowledge. This project is part of a research study aimed at exploring how AI can assist in addressing supply chain queries and identifying knowledge gaps in the field.

## Current Status

The project is currently in its initial phase with the following features:

- Web Interface: A user-friendly platform for interacting with the AI.
- AI-Powered Q&A: Utilizes Anthropic's API to answer user queries about supply chain management.
- Anonymous Interaction: Users can ask questions without revealing their identity, encouraging open inquiry.

## Features Under Development

We are actively working on enhancing SupplyChainBrutus.com with the following capabilities:

1. RAG (Retrieval-Augmented Generation) Implementation:
   - Integration of custom textbooks and educational resources on supply chain management.
   - Enabling the LLM to access and utilize this specialized knowledge base for more accurate and context-specific responses.

2. Advanced Data Analysis:
   - Recording user conversations and response ratings.
   - Implementing structural topic modeling to explore the most prevalent topics in user queries.
   - Analyzing the quality of AI responses based on user ratings.

## Research Objectives

1. Evaluate the effectiveness of a RAG-enhanced LLM in providing accurate and relevant answers to supply chain management questions.
2. Analyze the types of questions users ask when given access to an AI-powered supply chain management knowledge base.
3. Identify potential gaps in supply chain management knowledge or areas of high interest based on user queries.

## Technology Stack

- Frontend: Cloudflare Pages
- Backend: Cloudflare Workers
- Database: Cloudflare D1 (Serverless SQL database)
- AI Model: Currently using Anthropic's Sonnet 3.5 via API; plans to integrate custom RAG capabilities

## Privacy and Security

- All interactions are anonymous; no personal identifying information is collected.
- Data is securely stored and encrypted using Cloudflare's robust infrastructure.
- The project adheres to strict ethical guidelines for AI research and data handling.

## Contributions and Usage

This project is open for academic and research purposes. We welcome contributions that align with our research goals. If you use this project or its code in your work, please cite it as follows:

Vincent E. Castillo, SupplyChainBrutus.com, (2024), GitHub repository, https://github.com/ProfessorCastillo/SupplyChainBrutus.com

## License

MIT License with additional citation requirement

## Contact

For more information about this research project, please contact castillo.230@osu.edu.
