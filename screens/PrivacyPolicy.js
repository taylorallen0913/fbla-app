import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.header}>Privacy Policy</Text>
          <Text style={styles.body}>
            Taylor Allen and Om Chaudhary built the FBLA Overseer app as a Free
            app. This SERVICE is provided by Taylor Allen and Om Chaudhary at no
            cost and is intended for use as is. This page is used to inform
            visitors regarding our policies with the collection, use, and
            disclosure of Personal Information if anyone decided to use our
            Service. If you choose to use my Service, then you agree to the
            collection and use of information in relation to this policy. The
            Personal Information that we collect is used for providing and
            improving the Service. We will not use or share your information
            with anyone except as described in this Privacy Policy. The terms
            used in this Privacy Policy have the same meanings as in our Terms
            and Conditions, which is accessible at FBLA Overseer unless
            otherwise defined in this Privacy Policy.
          </Text>
          <Text style={styles.section}>Information Collection and Use</Text>
          <Text style={styles.body}>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to your full name, email, and password.
            The information that we request will be retained on your device and
            is not collected by us in any way. The app does use third party
            services that may collect information used to identify you.{" "}
          </Text>
          <Text style={styles.section}>Log Data</Text>
          <Text style={styles.body}>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing my Service, the time and date of your use of
            the Service, and other statistics.
          </Text>
          <Text style={styles.section}>Cookies</Text>
          <Text style={styles.body}>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory. This Service does not use these “cookies” explicitly.
            However, the app may use third party code and libraries that use
            “cookies” to collect information and improve their services. You
            have the option to either accept or refuse these cookies and know
            when a cookie is being sent to your device. If you choose to refuse
            our cookies, you may not be able to use some portions of this
            Service.
          </Text>
          <Text style={styles.section}>Service Providers</Text>
          <Text style={styles.body}>
            We may employ third-party companies and individuals due to the
            following reasons: To facilitate our Service; To provide the Service
            on our behalf; To perform Service-related services; or To assist us
            in analyzing how our Service is used. we want to inform users of
            this Service that these third parties have access to your Personal
            Information. The reason is to perform the tasks assigned to them on
            our behalf. However, they are obligated not to disclose or use the
            information for any other purpose.
          </Text>
          <Text style={styles.section}>Security</Text>
          <Text style={styles.body}>
            we value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </Text>
          <Text style={styles.section}>Links to Other Sites</Text>
          <Text style={styles.body}>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. we have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </Text>
          <Text style={styles.section}>Children’s Privacy</Text>
          <Text style={styles.body}>
            These Services do not address anyone under the age of 13. we do not
            knowingly collect personally identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            me with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact me
            so that we will be able to do necessary actions.
          </Text>
          <Text style={styles.section}>Changes to This Privacy Policy</Text>
          <Text style={styles.body}>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. we will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately after they are posted
            on this page.
          </Text>
          <Text style={styles.section}>Contact Us</Text>
          <Text style={styles.body}>
            If you have any questions or suggestions about my Privacy Policy, do
            not hesitate to contact me at fblaoverseer@gmail.com. This privacy
            policy page was created at privacypolicytemplate.net and
            modified/generated by App Privacy Policy Generator{"\n\n\n\n"}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 20
  },
  body: {
    margin: 20,
    fontSize: 15,
    fontWeight: "normal"
  },
  section: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    margin: 10
  }
});

export default PrivacyPolicy;
