

import React from 'react';

import { IconPhoto } from '@tabler/icons-react';
import LyricButton from './components/LyricButton/LyricButton';
import LyricActionIcon from './components/LyricActionIcon/LyricActionIcon';



function App() {
  const icon = <IconPhoto size={14} />;

  return (
    <div>
      <LyricButton buttonType="primary" radius="md" size="md" leftSection={icon} rightSection={icon} label="Button" />
      <LyricButton buttonType="secondary" radius="md" size="md" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>
      <LyricButton buttonType="tertiary" radius="md" size="md" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>
      <LyricButton buttonType="primary" radius="sm" size="sm" leftSection={icon} rightSection={icon} label="Button" />
      <LyricButton buttonType="secondary" radius="sm" size="sm" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>
      <LyricButton buttonType="tertiary" radius="sm" size="sm" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>
      <LyricButton buttonType="primary" radius="xs" size="xs" leftSection={icon} rightSection={icon} label="Button" />
      <LyricButton buttonType="secondary" radius="xs" size="xs" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>
      <LyricButton buttonType="tertiary" radius="xs" size="xs" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>


      <LyricButton buttonType="link" radius="xs" size="xs" leftSection={icon} rightSection={icon} label="Button">Button</LyricButton>
      <LyricActionIcon buttonType="primary" radius="md" size="md">

        <IconPhoto/>

      </LyricActionIcon>
      <LyricActionIcon buttonType="secondary" radius="md" size="md">

        <IconPhoto/>

      </LyricActionIcon>
      <LyricActionIcon buttonType="tertiary" radius="md" size="md">

        <IconPhoto/>

      </LyricActionIcon>
      <LyricActionIcon buttonType="primary" radius="sm" size="sm">

<IconPhoto/>

</LyricActionIcon>
<LyricActionIcon buttonType="secondary" radius="sm" size="sm">

<IconPhoto/>

</LyricActionIcon>
<LyricActionIcon buttonType="tertiary" radius="sm" size="sm">

<IconPhoto/>

</LyricActionIcon>
<LyricActionIcon buttonType="primary" radius="xs" size="xs">

<IconPhoto/>

</LyricActionIcon>
<LyricActionIcon buttonType="secondary" radius="xs" size="xs">

<IconPhoto/>

</LyricActionIcon>
<LyricActionIcon buttonType="tertiary" radius="xs" size="xs">

<IconPhoto/>

</LyricActionIcon>

    </div>
  );
}

export default App;


