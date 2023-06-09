import { Router } from 'express';

import { cache,getTodos } from '../controllers/todos';


const router = Router();


router.get('/:id', cache,getTodos);

router.get('/', getTodos);


export default router;