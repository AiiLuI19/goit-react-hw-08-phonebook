export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const filterContacts = (contacts, state) => {
  const filter = getFilter(state);

  return (
    contacts?.filter(contact => contact.name.toLowerCase().includes(filter)) ||
    []
  );
};
