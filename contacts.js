const contactStorage = [] // here is where you'll store your contacts

/*
 * addContact
 *
 *  Arguments:
 *    firstName: String (required)
 *    lastName: String (required)
 *    email: String (required)
 *
 *  Example Usage:
 *    addContact('Betty', 'Holberton', 'betty.holberton@eniac.edu')
 *  @param firstName {string}
 *  @return {undefined}
 */
const addContact = function (firstName, lastName, email) {
  contactStorage.push({ name: `${firstName} ${lastName}`, email })
}

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        first_name: 'Tanny',
 *        last_name: 'Vibert',
 *        email: 'tvibert0@illinois.edu',
 *      },
 *      {
 *        first_name: 'Tova',
 *        last_name: 'Myall',
 *        email: 'tmyall1@instagram.com',
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = function (contacts) {
  console.log('Loading contact data...')
  contacts.forEach(contact =>
    addContact(contact.first_name, contact.last_name, contact.email)
  )
  console.log('...Finished loading contact data.')
}


/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */
const printContacts = function () {
  const maxNameLength = 1 + contactStorage.reduce((a, contact) => {
    return a > contact.name.length ? a : contact.name.length
  }, 9)
  const maxEmailLength = 1 + contactStorage.reduce((a, contact) => {
    return a > contact.email.length ? a : contact.email.length
  }, 5)
  const line = `|${'-'.repeat(maxNameLength + 1)}+${'-'.repeat(maxEmailLength + 1)}|`

  console.log(`All Contacts:\n${line}\n| Full Name${' '.repeat(maxNameLength - 9)}| Email Address${' '.repeat(maxEmailLength - 13)}|\n${line}`)
  contactStorage.sort((a, b) => { return a.name > b.name ? 1 : -1 })
  contactStorage.forEach(contact =>
    console.log(`| ${contact.name}${' '.repeat(maxNameLength - contact.name.length)}| ${contact.email}${' '.repeat(maxEmailLength - contact.email.length)}|`)
  )
  console.log(line)
}


// //////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
// //////////////////////////////////////////////////////////

addContacts([
  {
    first_name: 'Tanny',
    last_name: 'Vibert',
    email: 'tvibert0@illinois.edu',
  },
  {
    first_name: 'Tova',
    last_name: 'Myall',
    email: 'tmyall1@instagram.com',
  },
  {
    first_name: 'Engracia',
    last_name: 'Folger',
    email: 'efolger2@epa.gov',
  },
  {
    first_name: 'Conroy',
    last_name: 'Honsch',
    email: 'chonsch3@sohu.com',
  },
  {
    first_name: 'Virgina',
    last_name: 'Cankett',
    email: 'vcankett4@washington.edu',
  },
  {
    first_name: 'Mateo',
    last_name: 'Da Costa',
    email: 'mdacosta5@about.com',
  },
  {
    first_name: 'Ambrose',
    last_name: 'Scullard',
    email: 'ascullard6@timesonline.co.uk',
  },
  {
    first_name: 'Shaylah',
    last_name: 'Fairney',
    email: 'sfairney7@stumbleupon.com',
  },
  {
    first_name: 'Pier',
    last_name: 'Waine',
    email: 'pwaine8@unc.edu',
  },
  {
    first_name: 'Karita',
    last_name: 'Bough',
    email: 'kbough9@angelfire.com',
  },
  {
    first_name: 'Marguerite',
    last_name: 'Lafayette',
    email: 'mlafayettea@bravesites.com',
  },
  {
    first_name: 'Northrop',
    last_name: 'Bauchop',
    email: 'nbauchopb@pagesperso-orange.fr',
  },
  {
    first_name: 'Devon',
    last_name: 'Bocking',
    email: 'dbockingc@comcast.net',
  },
  {
    first_name: 'Willdon',
    last_name: 'Hedley',
    email: 'whedleyd@purevolume.com',
  },
  {
    first_name: 'Charil',
    last_name: 'Clegg',
    email: 'cclegge@weibo.com',
  },
  {
    first_name: 'Nessi',
    last_name: 'Bywaters',
    email: 'nbywatersf@shop-pro.jp',
  },
  {
    first_name: 'Mercy',
    last_name: 'Browncey',
    email: 'mbrownceyg@yelp.com',
  },
  {
    first_name: 'Didi',
    last_name: 'Grose',
    email: 'dgroseh@google.com.hk',
  },
  {
    first_name: 'Niccolo',
    last_name: 'Spruce',
    email: 'nsprucei@wordpress.com',
  },
  {
    first_name: 'Winston',
    last_name: 'Hixley',
    email: 'whixleyj@homestead.com',
  },
])

printContacts()
