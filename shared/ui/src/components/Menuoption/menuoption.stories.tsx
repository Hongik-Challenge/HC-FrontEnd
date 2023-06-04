import { ComponentMeta, ComponentStory } from "@storybook/react"
import { MenuOption } from ".";
import { Routes, Route } from 'react-router-dom';

export default {
    title: 'layout/MenuOption',
    component: MenuOption,
    argTypes: {},
    decorators: [
        (Story) => (
            <Routes>
                <Route path="*" element={<Story />}/>
            </Routes>
        ),
    ],
} as ComponentMeta<typeof MenuOption>;

const mockMenus: MenuOption[] = [
    {
      menu:'수강신청 메뉴얼',
      id: 1,
    },
    {
      menu: '졸업요건 조회',
      id: 2,
    },
    {
      menu: '개설교과목',
      id: 3,
    },
    {
      menu: '나의 수강신청',
      id: 4,
    }
  ]
const Template: ComponentStory<typeof MenuOption> = (args) => <MenuOption {...args} />;

export const main = Template.bind({});
main.args = { options: mockMenus } 

