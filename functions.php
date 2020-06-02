<?php
$ch = curl_init('https://api.github.com/orgs/DamornTyde/repos');

curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Accept: application/vnd.github.v3+json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$json = curl_exec($ch);
curl_close($ch);

echo $json;
?>