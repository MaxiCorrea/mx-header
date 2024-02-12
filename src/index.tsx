import * as React from 'react'
import { makeStyles, Tooltip } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const useMxHeaderStyles = makeStyles(() => ({
  avatar: {
    display: 'flex',
    '& > *': {
      margin: 0
    },
    maxHeight : '45px',
    marginRight: '30px',
    marginLeft: '6px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  },
  flex: {
    flex: 1,
    height: '100%'
  },
  logoClickable: {
    cursor: 'pointer'
  },
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0.625rem 0',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0px 15px 19px rgba(168,127, 243, 0.30)',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'static',
    zIndex: 1,
    height: '62px'
  }
}))

interface IMxHeaderProps {
  readonly tooltipText: string
  readonly leftLinks?: React.ReactNode
  readonly rightLinks?: React.ReactNode
  readonly logoSrc?: string
  readonly onClickLogo?: () => void
}

export const MxHeader: React.FC<IMxHeaderProps> = (props) => {
  const { leftLinks, rightLinks, tooltipText, logoSrc, onClickLogo } = props
  const classes = useMxHeaderStyles()

  const avatar = (
    <div style={{ position: 'relative' }}>
      <Tooltip
        title={tooltipText}
        aria-label='logo'
        placement='bottom-start'
        onClick={onClickLogo}
        className={onClickLogo ? classes.logoClickable : undefined}
      >
        {logoSrc === undefined ? (
          <div aria-label='logo' className={classes.avatar}>
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='20.5' cy='20.5' r='20.5' fill='#A87FF3' />
            </svg>
          </div>
        ) : (
          <img
            aria-label='logo'
            src={`${logoSrc}`}
            alt='Logo'
            className={classes.avatar}
          />
        )}
      </Tooltip>
    </div>
  )

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.flex}>
          {leftLinks ? leftLinks : avatar }
        </div>
        {rightLinks ? <div>{rightLinks}</div> : null}
      </Toolbar>
    </AppBar>
  )
}
