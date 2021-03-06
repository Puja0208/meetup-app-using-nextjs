// import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Standbeeld_in_Oostende.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Standbeeld_in_Oostende.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from api

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from api
  // const client = await MongoClient.connect(
  //   "mongodb+srv://puja:puja1996$@cluster0.gtf6p.mongodb.net/meetups?retryWrites=true&w=majority"
  // );
  // const db = client.db();

  // const meetupsCollection = db.collection("meetups");

  // const meetups = await meetupsCollection.find().toArray();

  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 1,
  };
}

export default HomePage;
