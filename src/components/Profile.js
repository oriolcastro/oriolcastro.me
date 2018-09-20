import React from "react";
import { Grid, Image, Header, Icon } from "semantic-ui-react";
import ProfilePic from "../img/me.jpg";

const Profile = ({ isBlogPost }) => {
  return (
    <Grid columns={2} centered verticalAlign="middle">
      <Grid.Column computer={6} tablet={6} mobile={10}>
        {isBlogPost ? (
          <Image src={ProfilePic} rounded size="small" centered />
        ) : (
          <Image src={ProfilePic} circular fluid />
        )}
      </Grid.Column>
      <Grid.Column computer={8} tablet={8} mobile={14}>
        {isBlogPost ? (
          <Header size="medium">
            Oriol Castro
            <Header.Subheader style={{ textAlign: "justify" }}>
              Sóc programador web front-end, emprenedor digital i entusiasta
              tecnològic. En aquest blog escric sobre tecnologia i canvi social.
              Treballo a <a href="https://okstudio.tech">OK! Studio</a>.
            </Header.Subheader>
          </Header>
        ) : (
          <>
            <Header as="h1">Benvinguts al meu blog!</Header>
            <Header size="tiny" style={{ textAlign: "justify" }}>
              Sóc programador web front-end, emprenedor digital i entusiasta
              tecnològic. En aquest blog escric sobre tecnologia i canvi social.
              Treballo a <a href="https://okstudio.tech">OK! Studio</a>.
            </Header>
          </>
        )}
        <div>
          <a href="https://twitter.com/oriolcastro_">
            <Icon name="twitter" circular link />
          </a>
          <a href="https://www.instagram.com/oriolcastro_/">
            <Icon name="instagram" circular link />
          </a>
          <a href="https://www.linkedin.com/in/oriolcaar/">
            <Icon name="linkedin" circular link />
          </a>
          <a href="https://github.com/oriolcastro">
            <Icon name="github" circular link />
          </a>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Profile;
