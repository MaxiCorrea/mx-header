import type { Meta, StoryObj } from '@storybook/react'
import { MxHeader } from '..'
import logo from './assets/logo.png'

const meta: Meta<typeof MxHeader> = {
  title: 'Example/Header',
  component: MxHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof MxHeader>

export const DefaultStory: Story = {
  args: {}
}

export const DefaultTooltipStory: Story = {
  args: {
    tooltipText: 'App Version 0.0.1'
  }
}

export const DefaultLogoOnclickStory: Story = {
  args: {
    onClickLogo: () => {
      alert('Click Logo')
    }
  }
}

export const WithLogoStory: Story = {
  args: {
    logoSrc: `${logo.toString()}`
  }
}

export const WithLogoOnclickStory: Story = {
  args: {
    logoSrc: `${logo.toString()}`,
    onClickLogo: () => {
      alert('Click Logo')
    }
  }
}
