import { snippets } from '..';

describe('utils', () => {
    it('should export the snippets mock', () => {
        expect(snippets).toEqual([
            {
                id: 'thank you',
                template: 'Hello,\n Thank you for your reply.\nBest regards, John Doe',
             },
             {
               id: 'welcome',
               template: 'Hello,\n Welcome to  for your reply.\nBest regards, John Doe'
             },
             {
               id: 'lead',
               template: 'Hello,\n Let me introduce to you our company.'
             },
             {
               id: 'thank you',
               template: 'Hello,\n Thank you for your reply.\nBest regards, John Doe',
            },
            {
              id: 'welcome',
              template: 'Hello,\n Welcome to  for your reply.\nBest regards, John Doe'
            },
            {
              id: 'lead',
              template: 'Hello,\n Let me introduce to you our company.'
            },
        ])
    });
});