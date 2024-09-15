function doGet(e) {
    // set parameters
    const latitude_column_name = 'latitude';
    const longitude_column_name = 'longitude';
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();
    var headers = values[0];
    var longitude_idx = headers.indexOf(longitude_column_name);
    var latitude_idx = headers.indexOf(latitude_column_name);
    
    // create an empty array of features
    var featuresArray = [];
  
    // interate over the values
    for (var i = 1; i < values.length; i++) {
      var row = values[i];
      var rowObject = {};
      var rowDataProperties = {};
      for (var j = 0; j < headers.length; j++) {
        rowDataProperties[headers[j]] = row[j];
      }
      
      // generate geometry object
      var rowGeometry = {"type": "Point", "coordinates": [ row[longitude_idx], row[latitude_idx] ] };
      rowObject['type'] = 'Feature';
      rowObject['properties'] = rowDataProperties;
      rowObject['geometry'] = rowGeometry;
      featuresArray.push(rowObject);
      console.log(rowObject);
    
      
    }
    
    // create a geodata object
    var geodata = {"type": "FeatureCollection", "features": featuresArray}
  
    // return response
    return ContentService.createTextOutput(JSON.stringify(geodata)).setMimeType(ContentService.MimeType.JSON);
  
  
    }
  
    
  
  function setup() {
  }  