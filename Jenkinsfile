pipeline {
    agent any

    tools {
        // Ensure this matches your NodeJS configuration in Jenkins
        nodejs "NodeJS 14.x"
    }

    environment {
        // Add any environment variables you need here
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Adjust the branch and repository URL as necessary
                git branch: 'master', url: 'https://github.com/Dev-Sambhav/canvas-editor.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use npm or yarn depending on your project setup
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            // Actions that always execute after the pipeline (e.g., cleanup)
            echo 'Pipeline completed'
        }
        success {
            // Actions that execute on successful completion of the pipeline
            echo 'Pipeline succeeded'
        }
        failure {
            // Actions that execute on pipeline failure
            echo 'Pipeline failed'
        }
    }
}
