const BotDriver = require('../../index').BotDriver
const Capabilities = require('../../index').Capabilities
const Source = require('../../index').Source

const driver = new BotDriver()
  .setCapability(Capabilities.PROJECTNAME, 'Google Dialogflow Sample')
  .setCapability(Capabilities.CONTAINERMODE, 'dialogflow')
  .setCapability(Capabilities.DIALOGFLOW_PROJECT_ID, 'room-reservation-cfa4c')
  .setCapability(Capabilities.DIALOGFLOW_CLIENT_EMAIL, 'a-709-978@room-reservation-cfa4c.iam.gserviceaccount.com')
  .setCapability(Capabilities.DIALOGFLOW_PRIVATE_KEY, '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVYEQ7sqUVWWpM\nGZ6fios6P5uPbnrGdy6qe+FLBOrpv/UDQVJOrvoyl2d07arqOzbTf6uXnhQugJrk\nxxPZ2EoPKMy2izDcZXU7TpGUf2WvM3Sb1/DW++1Cj2Azog4UclR8R7KPqrpMUIAv\nm3CGuJphvs8nBq3izFjIkY7MPavBKrRWUVEaDhqrezWe7PKIA0tHMZlmhI12CVJw\nZav1GUFZv2MpE87ZqKxdTxwkGG+3ubbzKfBq/OSebRCNmWYnjuEGMUkA8W8lnC4J\nZlIW5f0NnNL+pfcXxBRbDrchxP5uo3WytZUmcIJMRYBcWDgsxiqHekJbDXrotWZk\nDq3WjYMDAgMBAAECggEAOeV9ji86gPD6mTyIYGTQw1TYClKhaLGVDXhAmMD0VsmZ\nmzEBuszaoZiYX09PxW+cwEWPkzu24SlPHg1wcvcvnS5mYY+iCeNTrGx0rvTka+YL\n2W997297IMjTgx8RL/YXu4MezcG2/BcJuSE1prB3X1dNURsMWpI08vMf6oY/UNGd\nESY1Pz14jWveX/QgcPuJg45VvO5p7CG+e39dOXO87Z51sXMynPa2xt/4NpPY3nwV\nlrCSghExWzBZObZIOBuHI92ILlqk1OPa/o1zIoi7JUE9Ha9lHCRQOvKwwMLtpgRd\n+q0iYUMbUULfcaoKqFghXbfRk+7XEI9BkTwBWYH0uQKBgQD1h9synzelMyT7FfnH\n1nbUsoEQraLy0Wia/3R2ks78/7u1QHB1XXpGz/gUPcFQrM6eep8wMYnhJm6b1jrC\n8lYVI7HCShYcG5uWet7/L/Qu2OzLTuJAlxsQyQjq/y5ZbBQvQWqgh2o+CSDNwMlS\n22aSr/+bf4iPkAXdhUieB94x2wKBgQDeeWtSy9lc2NI2Id20HizjFV1ifUO3U6lL\nh/pymzhnL2rucN7kJ2eW1+TrFcvjsIwJXYZ3FSdTpmH4gVVhvFVnvxpI0c8T53aT\n2d8uVgjZ5yTvn90gBqkyHAaJMY7QeQwTXxoB+3oXBjHENrELyxTsoVNCdHcikHzj\nF1eoAOif+QKBgQDqaUc74Eh2/wo6cbOkN7wBu15/dtcQbh8pg+RD5EubvegO1rPH\nSXSZMKqPYJo0lJc7NKTQlSsm+tM1EuXNAyJuUkK+1I6hTTZRB4PpLHY7V71TKT/X\nHKypbNWHzhMJKqdmqlTLaB1llr9r0Lgk0/Ts7PzjD3JoZb9Dy6EVxzs6awKBgQCo\nCbP7tMc4LvkQNCI+MvCakP+ZLZ5hMUrVJx8PQ5ilr5YoBY8Fa5H9yJI60prPHwGW\n7VJsTckHkMu9JQs1qEgl9Z1H1VmA4jqZUF4XpJpI5CLs76XY088mby6sn4cMhfGO\nDC4bwzOjgmVCnEC79KeYV/4IWunFbLc32+C0oAMVGQKBgGCgj/RaBv1eKCCUElFX\nQ+zosbIqypJpnQ8iyxmk4MT+6GH9escyCNiNxh6he0X7FghU8iIV6Lag5Vx18+vG\nPnv4xMdsaoRNDoasW6kEj43t+G6pgwjkzTcKtbE7EBta4ac2ooXTeG1c2wwAUE5L\nxpEVmFOWROSEty5mw6bi+FBZ\n-----END PRIVATE KEY-----\n')
  .setCapability(Capabilities.DIALOGFLOW_USE_INTENT, false)

driver.BuildFluent()
  .Start()
  .UserSaysText('hello')
  .WaitBotSaysText(console.log)
  .UserSaysText('book a room')
  .WaitBotSaysText(console.log)
  .Stop()
  .Clean()
  .Exec()
  .then(() => {
    console.log('READY')
  })
  .catch((err) => {
    console.log('ERROR: ', err)
  })
