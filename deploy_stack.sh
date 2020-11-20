#!/bin/bash

echo "Checking prerequisites..."

for i in 'kubectl' 'helm'; do
  if ! command -v $i &> /dev/null; then
      echo "  [KO] $i is not available in PATH or not installed... Exit"
      exit
  else
      echo "  [OK] $i installed"
  fi
done

echo "Using `kubectl config current-context` Kubernetes cluster"
echo "Do you want to continue?([y]/n)"
read input

if [ "$input" != "y" ] && [ "$input" != "" ]; then
echo "Exit installation"
exit
fi

echo -e "\nAdding and updating helm repositories...\n"
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add stable https://charts.helm.sh/stable
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

echo -e "\nInstalling prometheus helm chart in default namespace..."
helm upgrade prometheus -i --namespace=default prometheus-community/prometheus --values=./helm-charts/prometheus-chart/values.yaml >> ./chart-installed-notes.txt

echo -e "\nInstalling metrics-server helm chart in default namespace..."
helm upgrade metrics-server -i --namespace=default --values=./helm-charts/metrics-server-chart/values.yaml stable/metrics-server >> ./chart-installed-notes.txt

echo -e "\nInstalling grafana helm chart in default namespace..."
helm upgrade grafana grafana/grafana -i --namespace=default --values=./helm-charts/grafana-chart/values.yaml >> ./chart-installed-notes.txt

echo -e "\nInstalling node-service backend microservice helm chart in default namespace..."
helm upgrade node-service -i --namespace=default ./helm-charts/node-service/ >> ./chart-installed-notes.txt

echo -e "\nInstalling angular-app frontend microservice helm chart in default namespace..."
helm upgrade angular-app -i --namespace=default ./helm-charts/angular-app/ >> ./chart-installed-notes.txt

echo -e "\nStack Deployment completed successfully!"