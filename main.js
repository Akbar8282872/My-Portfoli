/**
 * Main Application Entry Point
 */

import { initNavigation } from './navigation.js';
import { initMotion } from './motion.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMotion();
  initContactForm();
});
