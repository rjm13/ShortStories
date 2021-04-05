import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
              ProfileScreen: 'Profile',
              EditProfileScreen: 'EditProfile'
            },
          },
          Stories: {
            screens: {
              StoriesScreen: 'two',
            },
          },
          Playlist: {
            screens: {
              PlaylistScreen: 'three',
            },
          },
        },
      },
      RecordAudio: '*',
      AudioPlayer: '*',
    },
  },
};
