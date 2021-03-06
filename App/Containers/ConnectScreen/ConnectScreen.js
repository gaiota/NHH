import React, { Component } from 'react'
import {Text, View } from 'react-native'

// Styles
export default class ConnectScreen extends Component {

  constructor() {
    super()
    this.state = {
        fullname: "",
        email: "",
        password: "",
        passwordConfirm: "",
        isRegiter: ""
    }
   }

  render () {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>ConnectScreen</Text>
      </View>
    )
  }
}

// Connect to Iceland Directorate of Health API, obtain patient data 
//patientID = 0206929999


export function GetPatientDataFromIceland(patientID) {

    fetch ("http://healthapi.hc.t.is/api/PatientData/GetPatient/"+patientID)
    .then((response) => response.json())
    .then((responseJson) => {

        return responseJson;
        //return responseJson;
    })
}

export function ExtractTreatmentData(jsonData,treatmentType){
   var allData =  jsonData.returnData["treatmentPlans"];

   //if(typeOfData === "treatmentPlans"){
      
   
   //take the first plan only for now
        //array
        var firstPlan = allData[0]["treatmentItems"];

        for (i=0; i< firstPlan.length;i++){
            
            if( firstPlan[i]["treatmentType"] === treatmentType){
                var treatmentDesc = firstPlan[i]["treatmentDescription"];
              //get the treatment detail of this type , first one only
                var treatmentDet = firstPlan[i]["treatment"][0];

                return {
                    treatmentDescription: treatmentDesc,
                    treatmentDet: treatmentDet,
                    treatmentPlanType: allData[0]["type"]
                }
            }

        }

   //}
}


// Upload to personal health measurement to Kanta
// Patient ID already available in :  352186dd-8f66-4e7d-a7fd-9e257d4b7080

export function UpdateObservationsKanta(patientID, arrayOfMeasurement){


}


export function GetAllPatientObservationsKanta(patientID){
  fetch ("http://fhirsandbox.kanta.fi/phr-resourceserver/baseStu3/Observation?patient="+patientID+"&_pretty=true")
  .then((response) => response.json())
  .then((responseJson) => {

      return responseJson;
      //return responseJson;
  })
}