pipeline {
	    agent any
	    
	    environment {
			    CI = 'true'
				  JOB_ENV = 'UAT'
				  AWS_ACCOUNT_ID = "046381260578"
          AWS_DEFAULT_REGION = "ap-southeast-2"
          IMAGE_NAME = "petlover"
          IMAGE_REPO_NAME = "pet-lover-uat"
          REPOSITORY_URI = "046381260578.dkr.ecr.ap-southeast-2.amazonaws.com/pet-lover-uat"
	    }

	    stages{
			   stage('Clone Repo') {
           steps {
              checkout scm
           }
         }

			   stage('Docker Build'){
	         steps {
				      script {
                dockerImage = docker.build "${IMAGE_NAME}"
				      }
           }
			   }
			
	        stage('Snyk Scan') {
            steps {
               echo 'Testing...'
               snykSecurity(
                failOnIssues: false,
                snykInstallation: 'snyk@latest',
                snykTokenId: 'snyk-api-token',
                additionalArguments: '--severity-threshold=high'
               )
            }
          }
  
	        stage('Login to ECR'){
	          steps{
				       withAWS(region: 'ap-southeast-2', credentials: 'AWS') {
						   sh 'aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com'
					     }    
	          }
	        }

	        stage('Docker tag and push'){
	          steps{
					     script{
	              sh 'docker tag ${IMAGE_NAME}:latest ${REPOSITORY_URI}:$BUILD_NUMBER'
					      sh 'docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:$BUILD_NUMBER'
					     }
				    }
	        } 
			
			    stage('Remove Image and Clean Workspace') {
            steps{
               sh 'docker rmi ${IMAGE_NAME}:latest'
            }

			      post{
                always {
                cleanWs()
                }
            }
          }

			    stage('Update TaskDefinition') {
            steps{ echo "triggering task definiton update job"
                   //build job: 'updatetaskdefinition', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
            }

				    post {
               success {
                slackSend channel: 'pet-lover', message: "${IMAGE_NAME} ${JOB_ENV} Backend Build and Push Docker Image Number ${BUILD_NUMBER} succeeded!"
               }
    
               failure {
                slackSend channel: 'pet-lover', message: "${IMAGE_NAME} ${JOB_ENV} Backend Build and Push Docker Image Number ${BUILD_NUMBER} failed!"
               }
            }
			    }
	    }
	}