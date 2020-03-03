import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Accordion } from "galio-framework";

class FAQ extends React.Component {
  render() {
    const data = [
      { title: "Who can join FBLA?", content: "Anyone can join FBLA!" },
      {
        title: "How do you join FBLA?",
        content:
          "You can join FBLA by contacting your local advisor. If your school offers FBLA as a club/organization, it is reccomended to get into contact with the club/organization's president. If your school does not have an FBLA club/organization, check your local FBLA website and contact an advisor from there."
      },
      { title: "What is FBLA?", content: "The FBLA mission is to bring business and education together in a positive working relationship through innovative leadership and career development programs. FBLA brings its mission to life through the application of its motto: Service, Education, and Progress. FBLA Overseer hopes to uphold this motto and allow FBLA to become more efficient through the optimization of otherwise time-consuming activities. " },
      { title: "What is the goal of FBLA Overseer?", content: "The aim of FBLA Overseer is to work with FBLA chapters to streamline the organization and planning of members, meetings, and events through the use of an efficient, scalable mobile app."},
      { title: "What does FBLA Overseer Accomplish?", content: "The various functionalities of FBLA Overseer allow chapters to stay coordinated, keep track of important information, increase team cohesiveness, and save time on planning. "}
    ];
    return (
      <Block>
        <Block center style={{ height: '80%', marginTop: "10%" }}>
          <Accordion dataArray={data} />
        </Block>
      </Block>
    );
  }
}

export default FAQ;
