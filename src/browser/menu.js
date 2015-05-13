// Copyright 2015-present Greg Hurrell. All rights reserved.
// Licensed under the terms of the MIT license.

'use strict';

import BrowserWindow from 'browser-window';
import app from 'app';

const menu = [
  {
    label: 'Corpus',
    submenu: [
      {
        label: 'About Corpus',
        selector: 'orderFrontStandardAboutPanel:',
      },
      {type: 'separator'},
         {
        label: 'Services',
        submenu: [],
      },
      {type: 'separator'},
      {
        accelerator: 'Command+H',
        label: 'Hide Corpus',
        selector: 'hide:',
      },
      {
        accelerator: 'Alt+Command+H',
        label: 'Hide Others',
        selector: 'hideOtherApplications:',
      },
      {
        label: 'Show All',
        selector: 'unhideAllApplications:',
      },
      {type: 'separator'},
      {
        accelerator: 'Command+Q',
        click: () => app.quit(),
        label: 'Quit Corpus',
      },
    ],
  },
  {
    label: 'Note',
    submenu: [
      {
        // TODO: figure out how to ghost this when no selection
        accelerator: 'Command+R',
        label: 'Rename',
        click: () => BrowserWindow.getFocusedWindow().webContents.send('rename'),
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        accelerator: 'Command+Z',
        label: 'Undo',
        selector: 'undo:',
      },
      {
        accelerator: 'Shift+Command+Z',
        label: 'Redo',
        selector: 'redo:',
      },
      {type: 'separator'},
      {
        accelerator: 'Command+X',
        label: 'Cut',
        selector: 'cut:',
      },
      {
        accelerator: 'Command+C',
        label: 'Copy',
        selector: 'copy:',
      },
      {
        accelerator: 'Command+V',
        label: 'Paste',
        selector: 'paste:',
      },
      {type: 'separator'},
      {
        accelerator: 'Command+A',
        label: 'Select All',
        selector: 'selectAll:',
      },
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        accelerator: 'Command+J',
        click: () => BrowserWindow.getFocusedWindow().webContents.send('next'),
        label: 'Next Note',
      },
      {
        accelerator: 'Command+K',
        click: () => BrowserWindow.getFocusedWindow().webContents.send('previous'),
        label: 'Previous Note',
      }
    ],
  },
  {
    label: 'Debug',
    submenu: [
      {
        accelerator: 'Command+R',
        click: () => BrowserWindow.getFocusedWindow().reloadIgnoringCache(),
        label: 'Reload',
      },
      {
        accelerator: 'Alt+Command+I',
        click: () => BrowserWindow.getFocusedWindow().toggleDevTools(),
        label: 'Toggle Developer Tools',
      },
    ],
  },
  {
    label: 'Window',
    submenu: [
      {
        accelerator: 'Command+M',
        label: 'Minimize',
        selector: 'performMiniaturize:',
      },
      {
        accelerator: 'Command+W',
        label: 'Close',
        selector: 'performClose:',
      },
      {type: 'separator'},
      {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:',
      },
    ]
  },
  {
    label: 'Help',
    submenu: []
  },
];

export default menu;
