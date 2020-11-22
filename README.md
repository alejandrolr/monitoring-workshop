# Monitoring Workshop

Code to deploy all necessary tools for the monitoring workshop.

## Prerequisites

1. A **kubernetes cluster** to deploy all elements. You can use one of the following local clusters:
    -  [Minikube](https://minikube.sigs.k8s.io/docs/start/)
    -  Install MacOS Docker-Desktop and configure [Docker-Desktop Local Kubernetes Cluster](https://docs.docker.com/docker-for-mac/#kubernetes) (easiest way for MacOs Users)
    -  [Kind cluster](https://kind.sigs.k8s.io/docs/user/quick-start/)

2. **kubectl** installed and pointing to local cluster context. Installation tutorial [here](https://kubernetes.io/es/docs/tasks/tools/install-kubectl/).
3. **Helm** installed locally. Installation tutorial [here](https://helm.sh/docs/intro/install/#through-package-managers).

## Stack deployment

To deploy stack use the following script:
```bash
./deploy_stack.sh
```

## Cleaning environment. Deleting stack.

To delete all the stack use the following script:
```bash
./delete_stack.sh
```

## Accessing UI via web browser

Once deployed stack, web interfaces can de exposed via [**port-forward**](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/). It consist of mapping the pod application port to a local port, to access the service via `localhost:port`. 

> Note: This is the easiest way to expose a service locally. Another options to expose services involve using ingresses, Nodeport/LoadBalancer services, etc. More information about accesing apps in a cluster [here](https://kubernetes.io/docs/tasks/access-application-cluster/).

### Accessing Prometheus UI

1. Expose Prometheus port.
   ```bash
   # Get Prometheus Pod Name
   export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
   
   # Expose Prometheus port (9090) via port-forward
   kubectl --namespace default port-forward $POD_NAME 9090
   ```

2. Go to http://localhost:9090 in a web browser to access prometheus UI.

### Accessing Grafana UI

1. Get grafana 'admin' password:
   ```bash
   kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
   ```
2. Expose Grafana port.
   ```bash
   # Get Grafana Pod Name
   export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=grafana,app.kubernetes.io/instance=grafana" -o jsonpath="{.items[0].metadata.name}")
   
   # Expose Grafana port (3000) via port-forward
   kubectl --namespace default port-forward $POD_NAME 3000
   ```

3. Go to http://localhost:3000 in a web browser to access grafana UI. Access using 'admin' and password from step 1.

### Accessing Angular App UI

1. Expose angular-app port.
   ```bash
   # Get angular-app Pod Name
   export POD_NAME=$(kubectl get pods --namespace default -l "app=angular-app" -o jsonpath="{.items[0].metadata.name}")
   
   # Expose angular-app port (80) via port-forward to local port 8080
   kubectl --namespace default port-forward $POD_NAME 8080:80
   ```

2. Go to http://localhost:8080 in a web browser to access angular-app UI.

