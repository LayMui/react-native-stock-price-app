import { Platform } from 'react-native';

const addTestIdentifiers = (id, disableAccessible = false) => {
  const disableAccessibility = disableAccessible
    ? { accessible: false }
    : { accessible: true }

  return { ...disableAccessibility, accessibilityLabel: id, testID: id }
}

export default addTestIdentifiers;