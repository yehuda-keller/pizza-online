package hac.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/orders")
    public Map<String, Object> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.saveOrder(order);
        Map<String, Object> response = new HashMap<>();
        response.put("orderId", savedOrder.getId()); // Assuming getId() returns the orderId
        return response;
    }

    @GetMapping("/")
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @DeleteMapping("/orders/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }
}
