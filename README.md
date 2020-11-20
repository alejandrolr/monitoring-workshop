# Monitoring Workshop

Code to deploy all necessary tools for the monitoring workshop.

## Prerequisites

1. A **kubernetes cluster** to deploy all elements. You can use one of the following local clusters:
    -  [Minikube](https://minikube.sigs.k8s.io/docs/start/)
    -  [MacOS Docker-Desktop Local Kubernetes Cluster](https://docs.docker.com/docker-for-mac/#kubernetes)
    -  [Kind cluster](https://kind.sigs.k8s.io/docs/user/quick-start/)

2. **kubectl** installed and pointing to local cluster context.
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