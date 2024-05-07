pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage("install"){
            steps{
                sh 'yarn cache clean && yarn'
            }
        }
        stage("Build"){
            steps{
                sh 'yarn build'
            }
        }
    }
}