01. Create Next Project with: npx create-next-app app-name
02. Install Sanity CLI: npm install -g @sanity/cli
03. You can start the project with Yarn (native in Nextjs) or npm: yarn run dev or npm run dev
04. Install Tailwindcss: npm install -D tailwindcss postcss autoprefixer
05. Then run npx tailwindcss init -p to generate the dependencies: npx tailwindcss init -p
06. Initialice Sanity with: sanity init.
    a. Choose the type of Database.
    b. Write the name.
    c. Chose the dataset (there are two the default which is production and development)
    d. Chose the templete if you want
    e. Say no if you don't want sample information. 
07. Install Tailwind with prettier: npm install -D prettier prettier-plugin-tailwindcss
08. Install Hero Icons: npm install @heroicons/react
09. Install ReactIcons: npm install react-icons --save
10. You can Add fonts from another soucers like Google: https://fonts.google.com/specimen/Poppins#styles
    a. Then go to tailwind.config.js
    b. In theme, extends add:
    c. theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                },
            },
        },
11. Install Headless library: npm install @headlessui/react@latest reference: https://headlessui.com/
12. Setup Sanity:
    a. Get the name of the dataset from sanity.io datasets/title
    b. Project ID is in main page PROJECT ID
    c. Generate the token in API go to TOKENS then add API TOKEN select the name like project_name
       select editor access then generate.
13. You can generate secret keys on: https://generate-secret.vercel.app/64 You can put 8/16/32/64...
14. GROQ (Grapph ql Query) Check some examples of querying on 2:26.
    *[_type == 'category'] {
        _id,
         slug,
         title
    }

    // Only id
    *[_type == 'category'] {
        _id,
    }

    // All the elements
    *[_type == 'category'] {
        _id,
         ...
    }

15. Install Sanity io tookit image-url for Nextjs Very important. Remember to install in the main directory not in sanity directory:
    npm install next-sanity @portabletext/react @sanity/image-url
16. Install react-currency-format: npm install react-currency-format --save
    Also you can install yarn add -D @types/react-currency-formatter
17. Create Stripe account and get publishable key and secret key.
18. Install Redux Toolkit which give us more beneficts:
    a. Install Redux: npm install @reduxjs/toolkit or yarn add @reduxjs/toolkit
    b. Install React/Redux: npm install @reduxjs/toolkit react-redux or yarn add @reduxjs/toolkit react-redux
19. We'll need to install React Hot Toast:
    yarn add react-hot-toast
20. Installing stripe package in order to run the checkout
    a. npm install @stripe/stripe-js stripe or via yarn
    b. yarn add @stripe/stripe-js stripe
    c. Then create/import file api-helpers.ts: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/api-helpers.ts
    d. Add file get-Stripejs. Intructions: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/get-stripejs.ts
    e. On File checkout_sessions.ts: https://github.com/stripe/stripe-node#configuration
21. Install the library react-responsive:
    a. npm install react-responsive --save or via yarn: yarn add react-responsive
22. Instal Next-Auth in order to create our login process.
    a. npm install next-auth or also via yarn yarn add next-auth
    b. Create folder insede pages/api folder call: auth
    c. Add file [...nextauth].js in the auth folder
23. Getting Google user autentification.
    a. Go to: cloud.google.com
    b. Sign in with your account.
    C. Go to console and then create a new project (clic top left, on the pop up window hit new project) and name it.
    d. Select the project (Top rigth).
    e. Go to API & Services, then credentials.
    f. Configure Consent Screen.
       - In OAuth go to external since we need the app for external users.
       - Name the app.
       - Write the user support email.
       - Add Developer contact email and save it.
       - On scoope save and coninue.
       - On Test user add some if you want if not continue and save.
       - The hit go to Dashboard.
    g. Go to the Credentials and Create Credentials top center then OAuth client ID.
       - In application tipe select Web Application.
       - In Name you can just leave the default one.
       - Hit ADD URI bottom (URI stands for Universal Resource Identifier). We're configuring this later when we have the URL.
       - Then hit CREATE.
       - Try to sign in into the app, it will cause an error the hit error details and take the information of request details
         and paste into your web client credentials (Autorized redirect URis.) then paste the localhost into Authorized Javascript
         origins: http://localhost:3000/ and save it.
24. Install package Next-Auth-Sanity
    npm: npm i next-auth-sanity or via yarn: yarn add next-auth-sanity
    a. Install the Schemas from https://www.sanity.io/plugins/next-auth-sanity
       - import { user, account } from 'next-auth-sanity/schemas'; on /sanity_folder/schemas/schemas.js after localBlockContent.
    b. In types: schemaTypes.concat add at the very final the user and account.
    c. In Sanity.io go to API, add CORS origin, then put the URL in the example: http://localhost:3000/ and check allow.
25. Install daysjs library for the dates.
    a. npm: npm i dayjs or yarn: yarn add dayjs
26. Deploying the site: 6:42
    a. Go to Sanity Studio folder where you install Sanity Stydio.
       - Type: sanity deploy.
       - Type: name_of_app.
       - When success you'll see the sanity url gives you.
       - Make sure you won't commit the sanity node_modules one way to do it is in gitignore: /sanity_folder/node_modules
27. One way to deploy our site is via github
    a. Create a repositiry
    b. Create repository in your computer: git remote add origin your_repository_address.git
    c. git add . // In order to add everything
    d. git status in order to see the files you're going to commit.
    e. git commit -m 'Build has been completed!'
    f. git push
28. Deploying via Vercel (Also you can do via nelifly or hostinger).
    a. Go to vercel.com/dashboard (You can login with your github account).
    b. Import the latest project and import.
    c. Very important add the enviroment variables like the localhost/3000 (.env file) to the url of your site. Then add one by one
       - We don't need STRIPE_SIGNING_SECRET
    d. Hit Deploy.
    e. Deploy manually in Netlify:
       https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/
       1. npm install -g netlify-cli // Install Netlify Globally
       2. ntl login // Login
       3. Go to root directory
       4. ntl init

References:
* https://www.youtube.com/watch?v=DCTuw2P6DCU&t=527s
* https://github.com/sanity-io/next-sanity
* https://redux.js.org/introduction/getting-started
* https://react-hot-toast.com/
* https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
* https://github.com/stripe/stripe-node#configuration
* https://nextjs.org/docs/api-routes/introduction
* https://next-auth.js.org/
* https://stackoverflow.com/questions/73668032/nextauth-type-error-property-session-does-not-exist-on-type
* https://stackoverflow.com/questions/54579728/how-to-get-avatar-for-gmail-user
* https://www.sanity.io/plugins/next-auth-sanity
* https://www.youtube.com/watch?v=ycKnuEciZ2M
* https://www.kindacode.com/article/using-tailwind-css-with-font-awesome-icons-a-deep-dive/
* https://stackoverflow.com/questions/53572640/dynamically-load-react-icons-into-component
* https://webdevstudios.com/2021/12/09/custom-404-page-next-js/
* https://stackoverflow.com/questions/71506663/how-to-animate-text-gradient-color-change-in-tailwind
* https://www.kindacode.com/article/tailwind-css-how-to-place-text-over-an-image/
* https://pxhere.com/en/photo/1637037
* https://www.javatpoint.com/how-to-remove-background-of-an-image-using-gimp
* https://layoutsfortailwind.lalokalabs.dev/ui/fullscreen-background/
* https://play.tailwindcss.com/CnpHH4Syb1 // This is part of the link above
* https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/images
* https://www.youtube.com/watch?v=kTWJypbcSLI // Countdown
* https://www.epochconverter.com/ // Time Converter
* https://day.js.org/ // Library for dates.
* https://devdojo.com/tailwindcss/buttons //Buttons 