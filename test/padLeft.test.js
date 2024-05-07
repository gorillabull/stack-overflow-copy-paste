import test from 'ava';
import { padLeft } from '../src';


test('pad left test',t=>{
    const expected = 3 ; 
    const actual = padLeft(1,2,3);
    t.same(actual,expected);
})