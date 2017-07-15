
Tool for easily translating language resources in JSON.

Using _React_, _Redux_ and _Bulma_

**Note:** I'm just starting with these frameworks. Not yet proud of my code. Suggestions welcome.

**Work in progress...** Current status available at: [https://build-gnilrwmjcj.now.sh/](https://build-gnilrwmjcj.now.sh/)

![alt text](./img/et1.gif)


State structure
--------------- 

The app state has the following structure:

```
state = {
    languages: [<language>, <language>, <language>]
}

```

Where `language` has the following structure:

```
language = {
      name: "English (en-GB)",
      messages: { 
          USER_NAME_LABEL: "User name", 
          PASSWORD_LABEL: "Password", 
          LOG_IN_BUTTON: "Log in"
      },
      showRaw: false
}

```

And state.languages[0] is always the **origin language**
