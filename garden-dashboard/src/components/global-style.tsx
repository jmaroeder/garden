/*
 * Copyright (C) 2018 Garden Technologies, Inc. <info@garden.io>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Global, css } from "@emotion/core"
import React from "react"
import media from "../styles/media"
import {
  colors,
  fontBold,
  fontMedium,
  fontRegular,
  tablet,
  fontFamily,
} from "../styles/variables"

const styles = css`
  html {
    box-sizing: border-box;
    color: ${colors.lightBlack};
    font-size: ${"1em" /*was: 44%*/};

    ${media.tablet`
      font-size: ${"1em" /*was: 62.5%*/};
    `};

    ${media.big`
      font-size: ${"1em" /*was: 84%*/};
    `};

    &.hidden {
      overflow: hidden;
    }
  }

  body {
    ${fontFamily};
    margin: 0;

    &.hidden {
      overflow: hidden;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  section {
    display: block;
  }

  .row {
    @media (max-width: ${tablet}) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1, h2, h3 {
    margin-top: 0;
  }

  strong {
    ${fontBold};
    font-size: inherit;
  }

  p {
    line-height: 1.25em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
  }

  input {
    box-shadow: none;
    outline: none;
  }

  button:focus {
    outline: none;
  }

  .fontMedium {
    ${fontMedium};
  }

  .underline {
    text-decoration: underline;
  }

  ::-webkit-input-placeholder {
    color: ${colors.waikawaGray};
    ${fontRegular};
  }
  :-moz-placeholder {
     color: ${colors.waikawaGray};
     ${fontRegular};
  }
  ::-moz-placeholder {
     color: ${colors.waikawaGray};
     ${fontRegular};
  }
  :-ms-input-placeholder {
     color: ${colors.waikawaGray};
     ${fontRegular};
  }
  ::-ms-input-placeholder {
     color: ${colors.waikawaGray};
     ${fontRegular};
  }

  ::placeholder {
     color: ${colors.waikawaGray};
     ${fontRegular};
  }
`

export default () => (
  <Global styles={styles} />
)