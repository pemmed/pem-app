import React, { useState } from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Modal,
  } from "react-native";
import { Picker } from "react-native-wheel-pick";
import { Button } from "react-native-paper";



const DatePickeriOS = () => {
    const [show, setShow] = useState(false);
    const [month, setMonth] = useState('')
    const [day, setDay] =useState('')
    const [year, setYear] =useState('')

    let months = [
        "January" ,
        "February",
        "March",
        "April" ,
        "May" ,
        "June" ,
        "July" ,
        "August" ,
        "September" ,
        "October",
        "November" ,
        "December",
      ];
    
      let days = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ];
    
      let years = [
        "2020",
        "2021",
        "2022",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
        "2030",
      ];
return(
  <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
    <View>
      <Button>Expiration date</Button>
      <Modal
        transparent={true}
        animationType="slide"
        visible={show}
        supportedOrientations={["portrait"]}
        onRequestClose={() => setShow(false)}
      >
        <View style={{ flex: 1 }}>
          <TouchableHighlight
            style={{
              flex: 1,
              alignItems: "flex-end",
              flexDirection: "row",
            }}
            activeOpacity={1}
            visible={show}
            onPress={() => setShow(false)}
          >
            <TouchableHighlight
              underlayColor={"#FFFFFF"}
              style={{
                flex: 1,
                borderTopColor: "#E9E9E9",
                borderTopWidth: 1,
              }}
              onPress={() => console.log("Date Clicked!")}
            >
              <View
                style={{
                  backgroundColor: `#FFFFFF`,
                  height: 300,
                  overflow: "hidden",
                }}
              >
                <View>
                  <View style={styles.rowItem}>
                    <Button onPress={() => setShow(false)}>
                      <Text>Cancel</Text>
                    </Button>
                    <Button>Confirm</Button>
                  </View>
                  <View style={styles.rowItem}>
                    <Picker
                      style={{
                        backgroundColor: "white",
                        width: 150,
                        height: 180,
                      }}
                      selectedValue={1}
                      onValueChange={(date) => {
                        setMonth(date);
                      }}
                      pickerData={months}
                    />
                    <Picker
                      style={{
                        width: 50,
                        height: 180,
                        backgroundColor: "white",
                      }}
                      selectedValue={3}
                      onValueChange={(date) => {
                        setDay(date);
                      }}
                      pickerData={days}
                    />
                    <Picker
                      style={{
                        width: 150,
                        height: 180,
                        backgroundColor: "white",
                      }}
                      selectedValue={3}
                      onValueChange={(date) => {
                        setYear(date);
                      }}
                      pickerData={years}
                    />
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  </TouchableHighlight>)
};

const styles = StyleSheet.create({
    rowItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    justifyContent: "space-between",
  }
})

export default DatePickeriOS;