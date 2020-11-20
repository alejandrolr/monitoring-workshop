#!/bin/bash

echo -e "Uninstalling helm charts... Cleaning environment"
echo "Do you want to continue?([y]/n)"
read input

if [ "$input" != "y" ] && [ "$input" != "" ]; then
echo "Exit"
exit
fi

for i in 'grafana' 'angular-app' 'node-service' 'metrics-server' 'prometheus'
do
echo "uninstalling $i..."
helm uninstall -n default $i
done