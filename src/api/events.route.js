import {Router} from 'express';
import DataStreamCtrl from './events.controller';

const router = new Router();

// router.route('/:id').get(DataStreamCtrl.apiHandleEvents);
router.route('/symbols').get(DataStreamCtrl.apiHandleEvents);

export default router;
