# 🚀 Kafka-Node-App: Real-time Message Processing

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Une application Node.js qui intègre Kafka pour le traitement de flux de données en temps réel et MongoDB pour le stockage persistant.

## 🌟 Fonctionnalités Principales

| Composant       | Description                                                                 |
|----------------|----------------------------------------------------------------------------|
| **Kafka Consumer** | Consommation des messages du topic `test-topic` en temps réel              |
| **MongoDB**      | Stockage persistant des messages avec modèle de données structuré          |
| **API REST**     | Interface pour accéder aux données via des endpoints bien définis          |

## 📦 Prérequis

- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)
- [Node.js v18+](https://nodejs.org/) (optionnel pour développement local)

## 🛠 Installation & Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/medalimab/kafka-node-app1
cd kafka-node-app1

# 2. Installer les dépendances
npm install

# 3. Lancer les services avec Docker
docker-compose up --build
```

🌐 Accès aux Interfaces
🔹 Application Web: http://localhost:3000


📡 API Endpoints
GET /
Description: Page d'accueil de l'API
Exemple:
curl http://localhost:3000/

GET /messages
Description: Liste tous les messages stockés
Réponse:
[
  {
    "_id": "651f7a3b8b9e8a3b9c8b9e8a",
    "content": "Message at 2023-10-05T12:34:56Z",
    "createdAt": "2023-10-05T12:34:56.123Z"
  }
]

GET /messages/:id
Description: Récupère un message spécifique
Paramètre: id - ID MongoDB du message
Exemple:
curl http://localhost:3000/messages/651f7a3b8b9e8a3b9c8b9e8a
