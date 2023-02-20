pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh '''
                    rm -rf .next/
                    rm -rf node_modules/
                    rm -rf package-lock.json
                    npm install --legacy-peer-deps
                    npm run build
                '''
            }
            post {
                success {
                    echo "Build successfully"
                }
                failure {
                    echo "Failed to Build"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
            post {
                success {
                    echo "test passed"
                }
                failure {
                    echo "Failed to test"
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}