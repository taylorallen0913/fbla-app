import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class TOS extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.header}>Terms and Conditions</Text>
          <Text style={styles.body}>
            These terms and conditions ("Terms", "Agreement") are an agreement
            between Mobile Application Developer ("Mobile Application
            Developer", "us", "we" or "our") and you ("User", "you" or "your").
            This Agreement sets forth the general terms and conditions of your
            use of the FBLA Overseer mobile application and any of its products
            or services (collectively, "Mobile Application" or "Services").
          </Text>
          <Text style={styles.section}>Accounts and membership</Text>
          <Text style={styles.body}>
            If you create an account in the Mobile Application, you are
            responsible for maintaining the security of your account and you are
            fully responsible for all activities that occur under the account
            and any other actions taken in connection with it. We may, but have
            no obligation to, monitor and review new accounts before you may
            sign in and use our Services. Providing false contact information of
            any kind may result in the termination of your account. You must
            immediately notify us of any unauthorized uses of your account or
            any other breaches of security. We will not be liable for any acts
            or omissions by you, including any damages of any kind incurred as a
            result of such acts or omissions. We may suspend, disable, or delete
            your account (or any part thereof) if we determine that you have
            violated any provision of this Agreement or that your conduct or
            content would tend to damage our reputation and goodwill. If we
            delete your account for the foregoing reasons, you may not
            re-register for our Services. We may block your email address and
            Internet protocol address to prevent further registration.
          </Text>
          <Text style={styles.section}>User content</Text>
          <Text style={styles.body}>
            We do not own any data, information or material ("Content") that you
            submit in the Mobile Application in the course of using the Service.
            You shall have sole responsibility for the accuracy, quality,
            integrity, legality, reliability, appropriateness, and intellectual
            property ownership or right to use of all submitted Content. We may,
            but have no obligation to, monitor and review Content in the Mobile
            Application submitted or created using our Services by you. Unless
            specifically permitted by you, your use of the Mobile Application
            does not grant us the license to use, reproduce, adapt, modify,
            publish or distribute the Content created by you or stored in your
            user account for commercial, marketing or any similar purpose. But
            you grant us permission to access, copy, distribute, store,
            transmit, reformat, display and perform the Content of your user
            account solely as required for the purpose of providing the Services
            to you. Without limiting any of those representations or warranties,
            we have the right, though not the obligation, to, in our own sole
            discretion, refuse or remove any Content that, in our reasonable
            opinion, violates any of our policies or is in any way harmful or
            objectionable.
          </Text>
          <Text style={styles.section}>Backups</Text>
          <Text style={styles.body}>
            We perform regular backups of the Content, however, these backups
            are for our own administrative purposes only and are in no way
            guaranteed. You are responsible for maintaining your own backups of
            your data. We do not provide any sort of compensation for lost or
            incomplete data in the event that backups do not function properly.
            We will do our best to ensure complete and accurate backups, but
            assume no responsibility for this duty.
          </Text>
          <Text style={styles.section}>Links to other mobile applications</Text>
          <Text style={styles.body}>
            Although this Mobile Application may link to other mobile
            applications, we are not, directly or indirectly, implying any
            approval, association, sponsorship, endorsement, or affiliation with
            any linked mobile application, unless specifically stated herein. We
            are not responsible for examining or evaluating, and we do not
            warrant the offerings of, any businesses or individuals or the
            content of their mobile applications. We do not assume any
            responsibility or liability for the actions, products, services, and
            content of any other third-parties. You should carefully review the
            legal statements and other conditions of use of any mobile
            application which you access through a link from this Mobile
            Application. Your linking to any other off-site mobile applications
            is at your own risk.
          </Text>
          <Text style={styles.section}>Prohibited uses</Text>
          <Text style={styles.body}>
            In addition to other terms as set forth in the Agreement, you are
            prohibited from using the Mobile Application or its Content: (a) for
            any unlawful purpose; (b) to solicit others to perform or
            participate in any unlawful acts; (c) to violate any international,
            federal, provincial or state regulations, rules, laws, or local
            ordinances; (d) to infringe upon or violate our intellectual
            property rights or the intellectual property rights of others; (e)
            to harass, abuse, insult, harm, defame, slander, disparage,
            intimidate, or discriminate based on gender, sexual orientation,
            religion, ethnicity, race, age, national origin, or disability; (f)
            to submit false or misleading information; (g) to upload or transmit
            viruses or any other type of malicious code that will or may be used
            in any way that will affect the functionality or operation of the
            Service or of any related mobile application, other mobile
            applications, or the Internet; (h) to collect or track the personal
            information of others; (i) to spam, phish, pharm, pretext, spider,
            crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to
            interfere with or circumvent the security features of the Service or
            any related mobile application, other mobile applications, or the
            Internet. We reserve the right to terminate your use of the Service
            or any related mobile application for violating any of the
            prohibited uses.
          </Text>
          <Text style={styles.section}>Intellectual property rights</Text>
          <Text style={styles.body}>
            This Agreement does not transfer to you any intellectual property
            owned by Mobile Application Developer or third-parties, and all
            rights, titles, and interests in and to such property will remain
            (as between the parties) solely with Mobile Application Developer.
            All trademarks, service marks, graphics and logos used in connection
            with our Mobile Application or Services, are trademarks or
            registered trademarks of Mobile Application Developer or Mobile
            Application Developer licensors. Other trademarks, service marks,
            graphics and logos used in connection with our Mobile Application or
            Services may be the trademarks of other third-parties. Your use of
            our Mobile Application and Services grants you no right or license
            to reproduce or otherwise use any Mobile Application Developer or
            third-party trademarks.
          </Text>
          <Text style={styles.section}>Changes and amendments</Text>
          <Text style={styles.body}>
            We reserve the right to modify this Agreement or its policies
            relating to the Mobile Application or Services at any time,
            effective upon posting of an updated version of this Agreement in
            the Mobile Application. When we do, we will revise the updated date
            at the bottom of this page. Continued use of the Mobile Application
            after any such changes shall constitute your consent to such
            changes. Policy was created with https://www.WebsitePolicies.com
          </Text>
          <Text style={styles.section}>Acceptance of these terms</Text>
          <Text style={styles.body}>
            You acknowledge that you have read this Agreement and agree to all
            its terms and conditions. By using the Mobile Application or its
            Services you agree to be bound by this Agreement. If you do not
            agree to abide by the terms of this Agreement, you are not
            authorized to use or access the Mobile Application and its Services.
          </Text>
          <Text style={styles.section}>Contacting us</Text>
          <Text style={styles.body}>
            If you would like to contact us to understand more about this
            Agreement or wish to contact us concerning any matter relating to
            it, you may send an email to fblaoverseer@gmail.com{'\n\n'}This
            document was last updated on February 29, 2020{'\n\n\n\n'}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 20,
  },
  body: {
    margin: 20,
    fontSize: 15,
    fontWeight: 'normal',
  },
  section: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
  },
})

export default TOS
