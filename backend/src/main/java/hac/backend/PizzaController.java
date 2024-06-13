package hac.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/pizzas")
public class PizzaController {

    @GetMapping
    public List<Pizza> getPizzas() {
        List<Pizza> pizzas = new ArrayList<>();

        pizzas.add(new Pizza("Margherita Pizza", 75.00, "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil leaves.", "/margarita.png"));
        pizzas.add(new Pizza("White Pizza", 75.00, "Delicious pizza with a creamy white sauce, mozzarella cheese, and your choice of toppings.", "/WhitePizza.png"));
        pizzas.add(new Pizza("Green Pizza", 77.00, "Healthy pizza topped with a variety of green vegetables like spinach, broccoli, and bell peppers, along with mozzarella cheese.", "/greenPizza.png"));
        pizzas.add(new Pizza("Truffle Pizza", 77.00, "Gourmet pizza featuring truffle oil, mushrooms, mozzarella cheese, and a touch of garlic.", "/TrufflePizza.png"));
        pizzas.add(new Pizza("Vegan Pizza", 69.00, "Plant-based pizza with vegan cheese, a variety of fresh vegetables, and flavorful marinara sauce.", "/VeganPizza.png"));
        pizzas.add(new Pizza("Zucchini Pizza", 77.00, "Light and refreshing pizza topped with thinly sliced zucchini, cherry tomatoes, mozzarella cheese, and fresh basil.", "/ZucchiniPizza.png"));

        return pizzas;
    }
}
