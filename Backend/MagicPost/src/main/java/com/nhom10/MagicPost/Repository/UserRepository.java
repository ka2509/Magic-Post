package com.nhom10.MagicPost.Repository;

import com.nhom10.MagicPost.Model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    @Transactional
    @Modifying
    @Query("UPDATE User a " +
            "SET a.isVerified = TRUE WHERE a.email = ?1")
    void verifyUser(String email);

   @Query(value = "SELECT u.* FROM `user` u INNER JOIN (select s.idShipments_point FROM shipments_point s WHERE s.gathering_point_id = :idGat) AS s1 \n"
           +"ON u.shipments_point_id = s1.idShipments_point", nativeQuery = true)
    List<User> getAllUser(Integer idGat);

   @Query(value = "SELECT * FROM `user` u WHERE u.shipments_point_id = :idShipment AND u.role = 'staff'", nativeQuery = true)
    List<User> getAllStaffFromShipment(Integer idShipment);

    @Query(value = "SELECT * FROM `user` u WHERE u.shipments_point_id <= 3  AND u.role = 'leader'", nativeQuery = true)
    List<User> getAllLeaderFromAllGat();
    @Query(value = "SELECT * FROM `user` u WHERE u.shipments_point_id > 3  AND u.role = 'leader'", nativeQuery = true)
    List<User> getAllLeaderFromAllTran();
}
