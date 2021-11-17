var client_id = pm.environment.get("client_id");
var client_secret = pm.environment.get("client_secret");
var tenant = pm.environment.get("tenant")


pm.sendRequest({
    url: 'https://login.microsoftonline.com/' + tenant + '/oauth2/v2.0/token',
    method: 'POST',
    header: {
        'Content-Type': 'application/x-www-form-urlencoded',
          },
      body: {
          mode: 'urlencoded',
          urlencoded: [
            {key: "client_id", value: pm.environment.get("client_id"), disabled: false},
            {key: "client_secret", value: pm.environment.get("client_secret"), disabled: false},
            {key: "scope", value: pm.environment.get("scope"), disabled: false},
            {key: "grant_type", value: pm.environment.get("grant_type"), disabled: false}
        ]
      }
},  function(err, response) {
  const jsonResponse = response.json();
  pm.environment.set("access_token", jsonResponse.access_token);
});