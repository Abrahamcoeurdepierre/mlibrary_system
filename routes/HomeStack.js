import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Home from "../screens/Home";
import BorrowBooks from "../screens/BorrowBooks";
import ReturnBooks from "../screens/ReturnBooks";
import Books from "../screens/Books";

const screens = {
    Home: {
        screen: Home
    },
    BorrowBooks: {
        screen: BorrowBooks
    }, 
    ReturnBooks: {
        screen: ReturnBooks
    },
    Books: {
        screen: Books
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);