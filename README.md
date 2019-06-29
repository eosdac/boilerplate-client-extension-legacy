![image](https://user-images.githubusercontent.com/44613132/59964407-7828f700-9500-11e9-94e6-e2f00fddc747.png)

# boilerplate-client-extension (coming soon...)
This repo contains all files to customize and extend the eosdac-client. It should be pulled in to the src/extensions folder of the eosdac-client. The extensions folder should be added to your gitignore file (by default).

## branding
You can change the default colors via the theme.json file found in statics/config/theme.json. You can generate and download your custom theme file by enabling the "dev tools" on the settings page. The logos for the eosdac-client will be pulled in from branding/images/logos. Be aware that the file names must match the original.

![image](https://user-images.githubusercontent.com/44613132/55157729-6c29d500-515d-11e9-88cf-6b6287885dd2.png)


## i18n: Add or change language strings
In the i18n folder you could customize or add language strings. If you add strings with the same key they will overwrite the defaults that come with the eosdac-client.

## pages, components and menu
Put your custom pages and components in the representative folders. Add your menu items to components/menu

## routes: add custom routes
Use the routes.js file to add your own routes pointing to your custom pages.

## store
initialize your vuex stores and/or create persistant states (locale storage).
