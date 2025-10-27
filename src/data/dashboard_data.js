const pieChartData = {
  "categories": [
    {
      "id": "cat_1",
      "name": "CSPM Executive Dashboard",
      "widgets": [
        { "id": "w_1", "name": "Cloud Accounts Connected", "type": "pie", "data":[{"label":"Connected","value":8},{"label":"Not Connected","value":4}],"colors":["#4CAF50","#D3D3D3"] },
        { "id": "w_2", "name": "Cloud Account Risk Assessment", "type":"donut","data":[{"label":"Failed","value":120,"color":"#FF4C4C"},{"label":"Warning","value":45,"color":"#FFBF00"},{"label":"Not available","value":10,"color":"#D3D3D3"},{"label":"Passed","value":325,"color":"#4CAF50"}],"total":500},
        //{ "id": "w_3", "name": "Security Alerts Today", "type":"text","text":"15 high, 40 medium, 120 low alerts detected."},
        { "id": "w_4", "name": "Policy Compliance Status", "type":"donut","data":[{"label":"Compliant","value":320,"color":"#4CAF50"},{"label":"Non-Compliant","value":80,"color":"#FF4C4C"}],"total":400}
      ]
    },
    {
      "id": "cat_2",
      "name": "Security Overview",
      "widgets": [
        { "id": "w_5", "name": "Total Vulnerabilities", "type":"text","text":"High: 12, Medium: 30, Low: 55"},
        { "id": "w_6", "name": "Vulnerability Distribution", "type":"pie","data":[{"label":"High","value":12},{"label":"Medium","value":30},{"label":"Low","value":55}],"colors":["#FF4C4C","#FFBF00","#4CAF50"]},
        { "id": "w_7", "name": "User Login Anomalies", "type":"text","text":"5 suspicious logins detected in the last 24 hours."},
        { "id": "w_8", "name": "Firewall Rule Compliance", "type":"donut","data":[{"label":"Passed","value":45,"color":"#4CAF50"},{"label":"Failed","value":5,"color":"#FF4C4C"}],"total":50},
        { "id": "w_9", "name": "Intrusion Attempts", "type":"text","text":"2 critical, 8 medium, 25 low-level intrusion attempts detected"}
      ]
    },
    {
      "id": "cat_3",
      "name": "Network Monitoring",
      "widgets": [
        { "id": "w_10", "name": "Network Traffic Overview", "type":"text","text":"Inbound: 1.2 TB, Outbound: 950 GB"},
        { "id": "w_11", "name": "Bandwidth Utilization", "type":"pie","data":[{"label":"Used","value":65},{"label":"Free","value":35}],"colors":["#FF4C4C","#4CAF50"]},
        { "id": "w_12", "name": "Packet Loss Overview", "type":"text","text":"Packet loss detected on 3 servers, average 0.5%"},
       // { "id": "w_13", "name": "Latency Overview", "type":"text","text":"Average latency: 120ms, max: 450ms"},
        //{ "id": "w_14", "name": "Active Connections", "type":"text","text":"Currently active connections: 1,234"}
      ]
    }
  ]
}

export default pieChartData;
