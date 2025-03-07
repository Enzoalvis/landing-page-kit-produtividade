const db = require("../config/db");

class TrackingData {
  static savePixelData(event, data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO pixel_data (event, data) VALUES (?, ?)";
      db.query(query, [event, JSON.stringify(data)], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = TrackingData;
