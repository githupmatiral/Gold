const express = require('express');
const router = express.Router();
const signalsController = require('../controllers/signalsController');

// 🔥 Core routes
router.post('/gold', signalsController.generateGoldSignals);
router.post('/get', signalsController.generateGoldSignals);
router.get('/upcoming', signalsController.getUpcomingSignals);
router.post('/clear-cache', signalsController.clearCache);

// 🚀 Optional routes
if (typeof signalsController.getCacheStatus === 'function') {
  router.get('/status', signalsController.getCacheStatus);
}

if (typeof signalsController.forceRefresh === 'function') {
  router.post('/refresh', signalsController.forceRefresh);
}

module.exports = router;
