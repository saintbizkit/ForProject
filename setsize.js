// BEFORE RUNNING:
// ---------------
// 1. If not already done, enable the Kubernetes Engine API
//    and check the quota for your project at
//    https://console.developers.google.com/apis/api/container
// 2. This sample uses Application Default Credentials for authentication.
//    If not already done, install the gcloud CLI from
//    https://cloud.google.com/sdk and run
//    `gcloud beta auth application-default login`.
//    For more information, see
//    https://developers.google.com/identity/protocols/application-default-credentials
// 3. Install the Node.js client library by running
//    `npm install googleapis --save`
// exports.scalend

exports.scalend = (event, context) => {
const {google} = require('googleapis');
const container = google.container('v1');

async function scalend () {
  const authClient = await authorize();
  const request = {
    // The name (project, location, cluster, node pool id) of the node pool to set
    // size.
    // Specified in the format 'projects/*/locations/*/clusters/*/nodePools/*'.
    name: 'projects/demoproject-tawatchaiw/locations/asia-southeast1/run-cluster/nodePools/a1',  // TODO: Update placeholder value.
    

    resource: {
      // TODO: Add desired properties to the request body.
      {
        "name" : string
        "nodeCount": integer
      }
      
    },

    auth: authClient,
  };

  const SetNode = nodePools.setSize(3);
  // SET_NODE_POOL_SIZE
  // nodepoolConditions

  const CurrentNode = nodePools.nodeCount;
  if (CurrentNode < SetNode)
  {

  }
  try {
    const response = (await container.projects.locations.clusters.nodePools.setSize(request)).data;
    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.error(err);
  }
}
scalend();

async function authorize() {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });
  return await auth.getClient();
}
}
