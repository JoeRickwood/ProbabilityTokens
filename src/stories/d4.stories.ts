import type { Meta, StoryObj } from '@storybook/html';
import { d4 } from '../assets/d4';
import { createAssetStory } from './createAssetStory';

const meta: Meta = {
  title: 'Assets/d4',
  parameters: {
    docs: {
      description: {
        component: `
# ${d4.name}

## Properties
- **Scale**: ${d4.scale.join(' × ')}
- **Faces**: ${d4.faces?.length || 'N/A'} faces
- **Format**: GLTF with textures
        `
      }
    }
  }
};

export default meta;

export const Default: StoryObj = createAssetStory(d4, 'd4');
