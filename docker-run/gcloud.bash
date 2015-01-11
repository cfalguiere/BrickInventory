gcloud compute instances create brickinventoryapp \
    --image container-vm-v20140925 \
    --image-project google-containers \
    --metadata-from-file google-container-manifest=containers.yaml \
    --tags http-server \
    --project brick-inventory
    --zone europe-west1-b \
    --machine-type f1-micro