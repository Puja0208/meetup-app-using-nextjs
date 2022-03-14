import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/45/Standbeeld_in_Oostende.jpg"
      title="A First Meetup"
      address="Somes treet 5 , some city"
      description="The meetup description"
    />
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  //fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/45/Standbeeld_in_Oostende.jpg",
        title: "A First Meetup",
        address: "Somes treet 5 , some city",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
